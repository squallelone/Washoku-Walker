import { createContext } from "react";
import { UserLocation } from "./types";

const UserLocationContext = createContext<UserLocation | null>(null);

export default UserLocationContext;
