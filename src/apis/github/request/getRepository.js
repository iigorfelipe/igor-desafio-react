import githubApi from "..";

const getRepository = async (username) => {
  const { data } = await githubApi.get(`users/${username}/repos`);

  return data;
};

export default getRepository;
