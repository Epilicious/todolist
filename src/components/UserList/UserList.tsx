import React, { ReactElement, useEffect, useState } from "react";
import { User } from "../../types/User";

function UserList(): ReactElement {
  const [users, setUser] = useState<User.Result[]>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data: User.RootObject = await res.json();
      const user = data.results;
      setUser(user);
    };
    fetchData();
  }, []);
  console.log(users);
  return <div></div>;
}

export default UserList;
