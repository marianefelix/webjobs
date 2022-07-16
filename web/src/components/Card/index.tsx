import { useCallback, useEffect, useState } from 'react';
import { Job } from 'models/job';
import { formatDistanceToNow } from 'date-fns';
import { Filter } from 'types';
import { Tag } from 'components/Tag';
import { Badge } from 'components/Badge';

import {
  CardContainer,
  JobTitle,
  CompanyImage,
  JobDescription,
  CompanyName,
  List,
  Item,
  Flex,
  Divider,
} from './styles';

interface TagType {
  title: Filter;
  selected: boolean;
}

interface TagListType {
  [id: string]: TagType;
}

interface CardProps {
  job: Job;
  selectedTags: Filter[];
  onChangeTagSelect: (tag: Filter) => void;
}

export const Card = ({ job, onChangeTagSelect, selectedTags }: CardProps) => {
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
    onChangeTagSelect(newTags[id].title);
  };

  useEffect(() => {
    const updatedTags = generateTags();

    Object.values(updatedTags).forEach((tag) => {
      tag.selected = selectedTags.includes(tag.title);
    });

    setTags(updatedTags);
  }, [selectedTags, generateTags]);

  return (
    <CardContainer tabIndex={0}>
      <Flex gap="24px">
        <CompanyImage src={job.logo} alt={job.company} />
        <JobDescription>
          <Flex>
            <CompanyName>{job.company}</CompanyName>
            {job.new && <Badge type="new" />}
            {job.featured && <Badge type="featured" />}
          </Flex>

          <JobTitle href={job.link}>{job.position}</JobTitle>
          <Flex>
            <span>
              {formatDistanceToNow(new Date(job.postedAt), { addSuffix: true })}
            </span>{' '}
            • <span>{job.workingTime}</span> •<span>{job.location}</span>
          </Flex>
        </JobDescription>
      </Flex>
      <Divider />
      <List>
        {Object.values(tags).map((tag, idx) => (
          <Item key={tag.title}>
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
