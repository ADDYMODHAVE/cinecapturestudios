export type contexttype = {
  AddImage: any;
  AddVideo: any;
  AvilableVideo: [
    {
      id: string;
      link: string;
      title: string;
    }
  ];
  AvilableImage: [
    {
      category: string;
      id: string;
      link: string;
      title: string;
    }
  ];
  OrderDetails: any[];
  DeleteVideo: any;
  DeleteImage: any;
  AddOrder: any;
  DeleteOrder: any;
};

export const AboutLogo = {
  logourl:
    "https://i.pinimg.com/564x/d7/49/86/d749863520cb181c1e38c9977451775f.jpg",
  abouturl:
    "https://i.pinimg.com/564x/72/97/18/72971869d88832735400ddfd3f83b0b3.jpg",
};
