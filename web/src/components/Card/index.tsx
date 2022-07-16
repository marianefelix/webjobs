import { useCallback, useEffect, useState } from 'react';
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
import { Tag } from 'components/Tag';
import { Badge } from 'components/Badge';
import { Job } from 'models/job';
import { formatDistanceToNow } from 'date-fns';
interface TagType {
  title: string;
  selected: boolean;
}

interface TagListType {
  [id: string]: TagType;
}

export const Card = ({ job }: { job: Job }) => {
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
