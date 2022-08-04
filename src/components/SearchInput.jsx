import React, { useState } from "react";

const SearchInput = () => {
  const [text, setText] = useState("");
  console.log(text);
  return (
    <input
      type="text"
      placeholder="digite o nome do usuário"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default SearchInput;
