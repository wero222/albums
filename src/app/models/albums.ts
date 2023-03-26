export type AlbumList = Albums[];

export interface Albums {
  userId: number;
  id: number;
  title: string;
}

export type PhotoList = Photos[];

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
