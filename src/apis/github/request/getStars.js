import github from "..";

const getStar = async (username) => {
  const { data } = await github.get(`/users/${username}/starred`);

  return data;
};

export default getStar;
