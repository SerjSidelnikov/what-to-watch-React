interface SignInData {
  email: string,
  password: string,
}

// interface Film {
//   id: number,
//   background_color: string,
//   background_image: string,
//   description: string,
//   director: string,
//   genre: string,
//   is_favorite: boolean,
//   name: string,
//   poster_image: string,
//   preview_image: string,
//   preview_video_link: string,
//   rating: number,
//   released: number,
//   run_time: number,
//   scores_count: number,
//   starring: string[],
//   video_link: string,
// }

interface Film {
  id: number,
  name: string,
  genre: string,
  'poster_image': string,
  src: string,
  'preview_video_link': string,
}

interface accountData {
  id: number,
  email: string,
  name: string,
  avatar_url: string,
}

export {
  SignInData,
  Film,
  accountData,
};
