import React, { memo, useContext } from 'react';
import { TableStyles, THeader, TRow, TData } from './Table.styles';
import Context from '../../Context';
import Abbr from '../../01-Atoms/Abbreviation/Abbreviation.styles';
import Form from '../../01-Atoms/Form/Form.styles';

function Table() {
  const { standings } = useContext(Context);

  const renderFrom = (form, key) => {
    if (key === 4) {
      return;
    }

    if (form === 'W') {
      return <Form win key={key} title="Win">W</Form>;
    }

    if (form === 'D') {
      return <Form draw key={key} title="Draw">D</Form>;
    }

    if (form === 'L') {
      return <Form lose key={key} title="Lose">L</Form>;
    }
  };

  const renderTeam = ({ points, rank, teamName, forme, all }, key) => {
    const nameToShorten = teamName.includes('Manchester');
    const team = nameToShorten ? teamName.replace('chester', '') : teamName;
    const teamUrl = team.toLowerCase().replace(/\s+/g, '-');
    const form = forme.split('').map(renderFrom).reverse();

    return (
      <TRow key={key}>
        <TData center>{rank}</TData>
        <TData bold><a href={`/${teamUrl}/`}>{team}</a></TData>
        <TData center>{all.matchsPlayed}</TData>
        <TData center>{all.win}</TData>
        <TData center>{all.draw}</TData>
        <TData center>{all.lose}</TData>
        <TData center bold>{points}</TData>
        <TData left noMobile last3>{form}</TData>
      </TRow>
    );
  };

  return (
    <TableStyles>
      <thead>
        <TRow>
          <THeader center title="Position">#</THeader>
          <THeader left>Team</THeader>
          <THeader center><Abbr title="Played"><span>P</span></Abbr></THeader>
          <THeader center><Abbr title="Won"><span>W</span></Abbr></THeader>
          <THeader center><Abbr title="Drawn"><span>D</span></Abbr></THeader>
          <THeader center><Abbr title="Lost"><span>L</span></Abbr></THeader>
          <THeader center><Abbr title="Points"><span>Pts</span></Abbr></THeader>
          <THeader left noMobile>Form</THeader>
        </TRow>
      </thead>

      <tbody>
        {standings.map(renderTeam)}
      </tbody>
    </TableStyles>
  );
}

export default memo(Table);
