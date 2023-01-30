import React from "react";
import { useLocation } from "react-router-dom";

export default function Verify() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hash = params.get("hash");
  console.log(hash);
  return <div>Verify</div>;
}
