import githubApi from "..";

const getRepository = async (username) => {
  const {
    data: { repos_url: repository },
  } = await githubApi.get(`users/${username}`);

  return repository;
};

export default getRepository;
