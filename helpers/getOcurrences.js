import { useEffect, useState } from 'react'
import axios from '../config/axios.config';


export const getOcurrences = async () => {

  try {
    const endpoint = 'tipo_caso/all';
    
    const resp = await axios.get(endpoint);
    const { data } = resp;

    const ocurrences = data.map((ocurrence) => {
      return {
        label: ocurrence.descripcion,
        value: ocurrence.id_tipo_caso,
      }
    });

    return ocurrences;
  } catch(err) {
    console.log(err);
  }
}