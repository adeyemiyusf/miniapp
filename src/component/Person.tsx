import { useState } from "react";
interface Props {
    gender: string;
    name: string;
    age: number;
    email: string;
    isMarried: boolean;
    friends: string[];
    country: Country

}
export enum Country {
  Nigeria="Nigeria",
  Brazil="Brazil",
  France = "France",
  Japan = "Japan"
}

const Person = (props: Props) => {
    const [name, setName] = useState<string>("");
    return (  
        <div>
          <h1>Gender: {props.gender}</h1>
          <h2>Name: {props.name}</h2>
          <h2>Age: {props.age}</h2>
          <h2>Email: {props.email}</h2>
          <h2>This person {props.isMarried ? "is" : "is not"}MARRIED</h2>
          {props.friends.map((friend: string) => (
            <h1>{friend}</h1>
          ))}
          <h1> Country: {props.country} </h1>
        </div>
    );
}
 
export default Person;