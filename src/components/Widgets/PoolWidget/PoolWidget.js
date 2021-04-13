import { gql, useMutation, useQuery } from '@apollo/client';
import PoolWidgetLayout from './PoolWidget.layout'
import { useSnackbar } from 'notistack';
import { useState } from 'react';

const POOL_BY_SLUG = gql`
  query Pool($slug: String!) {
    poolBySlug(slug: $slug) {
      id
      slug
      title
      description
      poolStatus
      options {
        id
        image
        label
        value
        votes
      }
    }
  }
`;

const MUTATION_ANSWER_POOL = gql`
  mutation AnswerPool($poolId: Int!, $optionId: Int!) {
    answerPool(
      poolId: $poolId
      poolOptionId: $optionId
    ) {
      id
    }
  }
`;

export default function PoolWidget({ poolSlug }) {
  const { enqueueSnackbar } = useSnackbar();

  // @TODO ~ This should be replaced with the answerId
  // that comes from the api
  const [answerId, setAnswerId] = useState();

  const {
    loading: loadingPool,
    error: errorPool,
    data,
  } = useQuery(POOL_BY_SLUG, {
    variables: {
      slug: poolSlug,
    },
  });

  const pool = data && data.poolBySlug;

  const [answerPool, {
    error: errorAnswer,
    loading: loadingAnswer,
  }] = useMutation(MUTATION_ANSWER_POOL);

  const onAnswerOption = async (option) => {
    try {
      await answerPool({
        variables: {
          poolId: pool.id,
          optionId: option.id,
        },
      });
      enqueueSnackbar(
        'Seu voto foi registrado!',
        {
          variant: "success",
        }
      );
      // @TODO ~ remove next line
      setAnswerId(option.id);
    } catch(error) {
      console.log('onAnswerOption catch: ', error);
      enqueueSnackbar(
        'Desculpe! Infelizmente não foi possível registrar o seu voto agora.',
        {
          variant: "error",
        }
      );
    }
  };

  return (
    <PoolWidgetLayout
      loading={loadingPool || loadingAnswer}
      error={errorPool}
      pool={pool}
      answerId={answerId}
      onAnswerOption={onAnswerOption}
    />
  )
}
