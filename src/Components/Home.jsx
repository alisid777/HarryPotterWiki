import React, { useEffect, useState } from 'react'
import Clist from "./List/Clist";

// Importing axios 
import axios from 'axios';
import Slist from './List/Slist';

const charUrl = "https://hp-api.onrender.com/api/characters";

const Home = ({chars, spells}) => {

  return (
    <div className='text-Gold'>
      <section className='character'>
        <Clist chars= {chars}/>
      </section>
      <section className='spells'>
          <Slist spells = {spells}/>
      </section>
    </div>
  )
}

export default Home