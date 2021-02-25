import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Button, Divider, Spin } from 'antd';
import axios from 'axios';

/**
 * Style
 */
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20vw;
  margin-left: 20vw;
`;
const ActionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
const InputBox = styled.div`
  margin: 15px 7px 0px 7px;
  text-align: center;
`;
const ErrorMsg = styled.p`
  margin-bottom: 0px;
  margin-top: 15px;
  color: red;
  font-size: 30px;
`;
const SummaryBox = styled.div``;

/**
 * TYPE
 */
interface JokeRegExp {
  name: RegExp;
  MaxJokes: RegExp;
}
const JokeRegExp: JokeRegExp = {
  name: /^[a-z]+$/i,
  MaxJokes: /[^0-9]/g,
};

interface Data {
  type: string;
  value: JokeList[];
}
interface JokeList {
  id: number;
  joke: string;
}
interface DataMaxJoke {
  type: string;
  value: number;
}

/**
 * Component
 */
const Joke: React.FC = () => {
  const [maxJoke, setMaxJoke] = useState<number>(0);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [max, setMax] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [sumText, setSumText] = useState<any[]>([]);
  const [spinner, setSpinner] = useState<boolean>(false);

  useEffect(() => {
    axios.get('http://api.icndb.com/jokes/count').then((res) => {
      const data: DataMaxJoke = res.data;
      setMaxJoke(data.value);
    });
  }, []);

  const validateMaxInput = (e: { target: HTMLInputElement }): void => {
    const value: string = e.target.value;
    if (JokeRegExp.MaxJokes.test(value)) return setMax(0);
    else if (value === '') return setMax(0);
    else if (parseInt(value) > maxJoke) return setMax(maxJoke);
    else if (!JokeRegExp.MaxJokes.test(value)) return setMax(parseInt(value));
  };

  /* API */
  const apiHandler = (
    firstname: string,
    lastname: string,
    max: number
  ): void => {
    if (
      !JokeRegExp.name.test(firstname) ||
      !JokeRegExp.name.test(lastname) ||
      !max
    )
      return setErrorMsg(true);
    else {
      setErrorMsg(false);
      setSpinner(true);
      const URL: string = `http://api.icndb.com/jokes/random/${max}?firstName=${firstname}&lastName=${lastname}`;
      axios.get(URL).then((res) => {
        renderJokelist(res.data);
      });
    }
  };

  /* Update */
  const renderJokelist = (data: Data): any => {
    let summaryText: any[] = [];
    for (let i of data.value) summaryText.push(i.joke);
    setSpinner(false);
    setSumText(summaryText);
  };

  return (
    <Body>
      <ActionBox>
        <InputBox>
          <p>Firstname</p>
          <Input
            value={firstname}
            style={{ textAlign: 'center' }}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <p>Lastname</p>
          <Input
            value={lastname}
            style={{ textAlign: 'center' }}
            onChange={(e) => setLastname(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <p>Max Jokes</p>
          <Input
            value={max}
            style={{ textAlign: 'center' }}
            onChange={(e) => validateMaxInput(e)}
          />
        </InputBox>
        <div style={{ marginLeft: '7px' }}>
          <Button onClick={() => apiHandler(firstname, lastname, max)}>
            GO
          </Button>
        </div>
      </ActionBox>
      {errorMsg ? <ErrorMsg>:(</ErrorMsg> : ''}
      <Divider orientation="center">Jokes</Divider>
      <SummaryBox>
        {spinner ? (
          <Spin size="large" />
        ) : (
          sumText.map((el, index) => (
            <p key={index + 1}>
              {`${index + 1}. `}
              {el}
            </p>
          ))
        )}
      </SummaryBox>
    </Body>
  );
};
export default Joke;
