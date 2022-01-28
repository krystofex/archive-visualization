import React from "react"
import {Box} from "@chakra-ui/react";
import MainLayout from "../components/layouts/MainLayout";
import axios from "axios";
import { Chart } from 'react-charts'

const HomePage = ({  data  }) => {
  
  
 
  return (
    <MainLayout>  
<Box w="full" h="600px">
      <Chart data={ [
      {
        label: 'Series 1',
        data:data.map((item,index )=> ([index,item.temperature])),
      },
    ]} axes={[
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ]} />
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  const response = await axios
    .get(
      "https://raw.githubusercontent.com/krystofex/archives/main/data/chrudimka/data.csv"
    )
    .then(function (response) {
      return response;
    });

  const rows = response.data.split("\n").splice(1); // remove header
  rows.pop(); // remove last empty row

  const data = rows.map((row) => {
    const columns = row.split(",");
    return {
      date: columns[0],
      status: columns[1],
      flow: columns[2],
      temperature: columns[3],
    };
  });

  console.log(data);

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
