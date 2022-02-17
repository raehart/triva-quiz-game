import React from "react";
import './QuizCard.scss'

export default function QuizCard() {
  return (
    <div className="quiz-card">
      <div className="c-card">
        <div role="separator" className="c-card__item c-card__item--divider">
          Category
        </div>
        <div className="c-card__item">
          <p className="c-paragraph">Question Text ?</p>
        </div>
        <div role="separator" className="c-card__item c-card__item--divider">
          Pick One Answer
        </div>
        <div className="c-card__item">
          <fieldset className="o-fieldset">
            <label className="c-field c-field--choice">
              <input type="radio" name="optionsRadios" />
              Answer 1
            </label>
            <label className="c-field c-field--choice">
              <input type="radio" name="optionsRadios" />
              Answer 2
            </label>
            <label className="c-field c-field--choice">
              <input type="radio" name="optionsRadios" />
              Answer 3
            </label>
            <label className="c-field c-field--choice">
              <input type="radio" name="optionsRadios" />
              Answer 4
            </label>
          </fieldset>
        </div>
        <footer className="c-card__footer c-card__footer--block">
          <button className="c-button c-button--rounded c-button--warning u-xlarge">
            Submit
          </button>
        </footer>
      </div>
    </div>
  );
}
