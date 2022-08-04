import github from "..";

const getUser = async (username) => {
  const { data } = await github.get(`/users/${username}`);

  return data;
};

export default getUser;
