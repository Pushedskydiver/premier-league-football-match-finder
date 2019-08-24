import React, { memo } from 'react';
import { TableStyles, THeader, TData } from './Table.styles';
import Abbr from '../../01-Atoms/Abbreviation/Abbreviation.styles';

function Table(props) {
  const { standings } = props;

  const renderTeam = ({ points, rank, teamName, logo, all }, key) => {
    const nameToShorten = teamName.includes('Manchester');
    const team = nameToShorten ? teamName.replace('chester', '') : teamName;
    const teamUrl = team.toLowerCase().replace(/\s+/g, '-');

    return (
      <tr key={key}>
        <TData center>{rank}</TData>
        <TData><a href={`/${teamUrl}/`}>{team}</a></TData>
        <TData center>{all.matchsPlayed}</TData>
        <TData center>{all.win}</TData>
        <TData center>{all.draw}</TData>
        <TData center>{all.lose}</TData>
        <TData center>{points}</TData>
      </tr>
    );
  };

  return (
    <TableStyles>
      <thead>
        <tr>
          <THeader center>
            <Abbr title="Position"><span>#</span></Abbr>
          </THeader>

          <THeader left>Team</THeader>

          <THeader center>
            <Abbr title="Played"><span>P</span></Abbr>
          </THeader>

          <THeader center>
            <Abbr title="Won"><span>W</span></Abbr>
          </THeader>

          <THeader center>
            <Abbr title="Drawn"><span>D</span></Abbr>
          </THeader>

          <THeader center>
            <Abbr title="Lost"><span>L</span></Abbr>
          </THeader>

          <THeader center>
            <Abbr title="Points"><span>Pts</span></Abbr>
          </THeader>
        </tr>
      </thead>

      <tbody>
        {standings.map(renderTeam)}
      </tbody>
    </TableStyles>
  );
}

export default memo(Table);
