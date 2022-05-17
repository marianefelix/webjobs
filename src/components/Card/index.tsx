import React, { useCallback, useEffect, useState } from 'react';
import {
  CardContainer,
  JobTitle,
  CompanyImage,
  JobDescription,
  CompanyName,
  List,
  Item,
  Flex,
} from './styled';
import { Tag } from 'components/Tag';
import { Badge } from 'components/Badge';
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

interface TagType {
  title: string;
  selected: boolean;
}

interface TagListType {
  [id: string]: TagType;
}

export const Card = ({ job }: { job: JobType }) => {
  const [tags, setTags] = useState<TagListType>({});

  const generateTags = useCallback(() => {
    const newTags = {} as TagListType;
    const tagList = [job.role, job.level, ...job.languages, ...job.tools];

    tagList.forEach((tag, idx) => {
      const key = idx + 1;
      newTags[key] = { title: tag, selected: false };
    });

    return newTags;
  }, [job.role, job.level, job.languages, job.tools]);

  const handleTagSelection = (idx: number) => {
    const id = idx + 1;
    const newTags = { ...tags };
    newTags[id].selected = !newTags[id].selected;
    setTags(newTags);
  };

  useEffect(() => {
    setTags(generateTags());
  }, [generateTags]);

  return (
    <CardContainer>
      <Flex gap="20px">
        <CompanyImage src={job.logo} />
        <JobDescription>
          <Flex>
            <CompanyName>{job.company}</CompanyName>
            {job.new && <Badge type="new" />}
            {job.featured && <Badge type="featured" />}
          </Flex>

          <JobTitle>{job.position}</JobTitle>
          <Flex>
            <span>{job.postedAt}</span> • <span>{job.contract}</span> •
            <span>{job.location}</span>
          </Flex>
        </JobDescription>
      </Flex>
      <List>
        {Object.values(tags).map((tag, idx) => (
          <Item>
            <Tag
              selected={tag.selected}
              onClick={() => handleTagSelection(idx)}
            >
              {tag.title}
            </Tag>
          </Item>
        ))}
      </List>
    </CardContainer>
  );
};
