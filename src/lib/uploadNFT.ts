import { Readable } from "stream";
import { storage } from "./storage";
import csvParser from "csv-parser";

export const parseCSV = async (csvContent: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const results: any[] = [];
    const stream = Readable.from([csvContent]);
    stream
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results[0]);
      })
      .on('error', (error) => reject(error));
  });
};

const uploadImage = async (
  name: string,
  image: File
) => {
  return await storage.putFile(
    name,
    image,
    {
      encrypt: false
    }
  );
}

const uploadMetadata = async (
  name: string,
  attributes: { [key: string]: string },
  imageURL: string
) => {
  return await storage.putFile(
    name,
    JSON.stringify({
      sip: 16,
      attributes: {...attributes},
      asset_type: 'image',
      image: imageURL
    }),
    {
      encrypt: false
    }
  );
}

export const uploadMetadataNFT = async (
  csv: File,
  image: File
) => {
  const reader  = new FileReader();
  reader.onload = async () => {
    const csvContent = reader.result as string;
    const imageURL = await uploadImage("my-nft-image-1", image);
    const metadata = await parseCSV(csvContent);
    const metadataURL = await uploadMetadata("my-nft-1", metadata, imageURL);
    console.log(metadataURL);
  };
  reader.readAsText(csv);
}