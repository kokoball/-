export interface IFilesTypes {
  created_at: number;
  key: string;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  sent?: Sent;
  summary: string;
  thumbnailUrl: string;
  files?: FilesType[] | null;
}

export interface Sent {
  subject: string;
  content: string;
  emails?: string[] | undefined;
}

export interface FilesType {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}
