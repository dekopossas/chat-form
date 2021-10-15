import React from 'react';
import style from '../style.module.scss';

// Icons (não consegui usar os indos decidi não perder tempo aqui mais!)
// import SearchIcon from '@mui/icons-material/DonutLarge';

function SearchSideBar() {
  return (
    <div className={style.search}>
      <div className={style.search_input}>
        <div className={style.search_icons}>
          {/* <SearchIcon fontSize="small" style={{color: '#919191'}} /> */}
          <input type="search" placeholder="Procurar ou começar uma nova conversa" />
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
