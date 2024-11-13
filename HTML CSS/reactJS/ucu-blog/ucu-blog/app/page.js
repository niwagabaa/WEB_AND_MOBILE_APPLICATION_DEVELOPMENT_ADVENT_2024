import Title from "./components/Title";

import Content from "@/app/components/Content";

import Button from '@mui/material/Button';


function home() {


  return(
    <div>

      <Button variant="text">Text</Button>

      <Title heading="cookie Monster" />
      <Content details="Nice blog form cookie monster" />

      <br />
      
      <Button variant="contained">Contained</Button>

      <Title heading="cookie Monster" />
      <Content details="Nice blog form cookie monster" />

      <br />
      
      <Button variant="outlined">Outlined</Button>

      <Title heading="cookie Monster" />
      <Content details="Nice blog form cookie monster" />

      <br />
    </div>
  );
}

export default home;