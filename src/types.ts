export interface ApkPackage {
  id: string;
  name: string;
  filename: string;
  version: string;
  description: string;
  releaseNotes?: string;
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
  isCustomUpload: boolean;
  blob?: Blob;
}

export type Language = 'hi' | 'en' | 'bn';

export type RoutePath =
  | '/'
  | '/download'
  | '/about'
  | '/categories'
  | '/install-guide'
  | '/faq'
  | '/contact'
  | '/404';
