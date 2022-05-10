import React, { useState } from 'react';
import {
  CardContainer,
  JobTitle,
  CompanyImage,
  JobDescription,
  CompanyName,
  Tags,
} from './styled';
import { Tag } from 'components/Tag';

interface JobType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export const Card = ({ job }: { job: JobType }) => {
  const [selected, setSelected] = useState(false);

  return (
    <CardContainer>
      <JobDescription>
        <CompanyImage src={`../../assets/images/${job.logo}`} />
        <div>
          <CompanyName>{job.company}</CompanyName>
          <JobTitle>{job.position}</JobTitle>
          <div>
            <span>{job.postedAt}</span> . <span>{job.contract}</span> .{' '}
            <span>{job.location}</span>
          </div>
        </div>
      </JobDescription>
      <Tags>
        <Tag
          selected={selected}
          onClick={() => setSelected((prevState) => !prevState)}
        >
          Frontend
        </Tag>
        <Tag
          selected={selected}
          onClick={() => setSelected((prevState) => !prevState)}
        >
          Senior
        </Tag>
      </Tags>
    </CardContainer>
  );
};
