import React from "react";

const AuthorInfo = ({name}) => {
  return (
    <option key={name}>{name}</option>
  )
}

export default AuthorInfo;