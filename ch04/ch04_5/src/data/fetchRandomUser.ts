export type IRandomUser = {
  email: string;
  name: { title: string; first: string; last: string };
  picture: { large: string; medium: string; thumbnail: string };
};

export const fetchRandomUser = async (): Promise<IRandomUser> => {
  const response = await fetch("https://randomuser.me/api/");
  if (!response.ok) {
    throw new Error("Failed to fetch random user.");
  }
  const data = await response.json();
  return data.results[0] as IRandomUser;
};
