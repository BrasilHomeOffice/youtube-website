import { gql, useMutation, useQuery } from '@apollo/client';
import PoolWidgetLayout from './PoolWidget.layout'
import { useSnackbar } from 'notistack';
import { useAuth } from '../../../lib/auth/auth';
import { useEffect } from 'react';

const POOL_BY_SLUG = gql`
  query Pool($slug: String!) {
    poolBySlug(slug: $slug) {
      userAnswerId
      pool {
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
  return <></>;
  const { enqueueSnackbar } = useSnackbar();
  const isLoggedIn = useAuth(state => !!state.user.id);

  const {
    loading: loadingPool,
    error: errorPool,
    data,
    fetchMore,
  } = useQuery(POOL_BY_SLUG, {
    variables: {
      slug: poolSlug,
    },
  });

  const pool = data && data.poolBySlug && data.poolBySlug.pool;
  const userAnswerId = data && data.poolBySlug && data.poolBySlug.userAnswerId;

  const [answerPool, {
    error: errorAnswer,
    loading: loadingAnswer,
  }] = useMutation(MUTATION_ANSWER_POOL);

  useEffect(() => {
    fetchMore({
      variables: {
        slug: poolSlug,
      },
    });
  }, [isLoggedIn]);

  const onAnswerOption = async (option) => {
    if (!isLoggedIn) {
      enqueueSnackbar(
        'Você precisa fazer login com facebook antes de continuar!',
        {
          variant: 'warning',
        },
      );
      return;
    }

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
      answerId={userAnswerId}
      onAnswerOption={onAnswerOption}
    />
  )
}
