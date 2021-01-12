import React from "react";
import styled from "styled-components";

const BooksCard: React.FC<{}> = () => {
  return (
    <BooksCardStyle>
      <div className="books-card__wrapper">
        <div className="books-card__itemBook">
          <a>
            <img src="" alt="" className="itemBook__cover" />
            <h3 className="item-book__nameBook">text</h3>
            <h4 className="item-book__authorBook">text</h4>
            <h1 className="item-book__priceBook">text</h1>
          </a>
        </div>
      </div>
    </BooksCardStyle>
  );
};

export default BooksCard;

const BooksCardStyle = styled.div`
  .books-card__wrapper {
    width: 900px;
    border: 1px solid black;
  }
  .books-card__itemBook {
    width: 300px;
    border: 1px solid tomato;
  }
  .books-card {
    & __wrapper {
      width: 900px;
      border: 2px solid gray;
      box-shadow: 5px 3px 4px 2px gray;
    }
    & __itemBook {
      width: 300px;
      border: 1px solid tomato;
    }
  }
`;
