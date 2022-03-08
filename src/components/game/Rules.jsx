/* eslint-disable max-len */
import React from 'react';
import { useHistory } from 'react-router';
import { useCategory } from '../state/GameProvider';
import { useTranslation } from 'react-i18next';
import '../../i18n/config.js';
import styles from '../styles/Main.scss';

export default function Rules() {

  const { category, setCategory } = useCategory();
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/game');
  };

  const handleChecked = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    console.log(category);
  };

  return (
    <>
      <button onClick={() => {
        i18n.changeLanguage('jp');
      }}>
        日本語
      </button>
      <button onClick={() => {
        i18n.changeLanguage('en');
      }}>
        EN
      </button>
      
      <h1>{t('rules')}</h1>
      <p>
        {t('instructions')}
      </p>
      <h2>{t('categories')}</h2>
      <form  onSubmit={handleSubmit} className={styles.rules}>
        <fieldset onChange={handleChecked}>
          <legend>{t('categories')}</legend>

          <input type="radio" name="category" value="FnV"></input>
          <label>{t('cat1')}</label>
         
          <input type="radio" name="category" value="Names"></input>
          <label>{t('cat2')}</label>
         
          <input type="radio" name="category" value="Animals"></input>
          <label>{t('cat3')}</label>
         
          <input type="radio" name="category" value="Pokemon"></input>
          <label>{t('cat4')}</label>
         
          <input type="radio" name="category" value="Marvel vs DC"></input>
          <label>{t('cat5')}</label>
        </fieldset>
        {/* <fieldset>
          <legend>Penalties</legend>
          <input type="radio" name="penalty" value="None"></input>
          <label>No Penalty</label>
          <input type="radio" name="penalty" value="Time"></input>
          <label>Lose 10 Seconds</label>
          <input type="radio" name="penalty" value="Turns"></input>
          <label>Take two turns</label>
          <input type="radio" name="penalty" value="Instant"></input>
          <label>Instant Loss</label>
        </fieldset> */}
        <button>{t('submit')}</button>
      </form>
    </>
  );
}
