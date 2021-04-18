import PageWithSidebar from '../../components/PageWithSidebar/PageWithSidebar'
import styles from '../../styles/videos/apresentacao-brasil-home-office.module.scss'
import CareerCards from '../../components/CareerCards/CareerCards';
import SocialLoginWidget from '../../components/Widgets/SocialLoginWidget/SocialLoginWidget';
import PoolWidget from '../../components/Widgets/PoolWidget/PoolWidget';
import VideoRow from '../../components/Video/VideoRow/VideoRow';

const articles = [1,2,3,4,5];

export default function Videos() {

  const sidebar = (
    <div>
      <SocialLoginWidget />
      <PoolWidget poolSlug="slug" />
    </div>
  );

  return (
    <div className={styles.container}>
      <PageWithSidebar
        sidebar={sidebar}
      >
        {articles.map(a => {
          return (
            <VideoRow
              title="Título Desse Post do Blog"
              date={new Date()}
              excerpt="Lorem ipsum dolor sit amet lorem ipsum amet lorem sit ante may asu mit sitamet alom homora sit ipsum"
              thumbnail="https://i.ytimg.com/vi/Eca6CfxxIW4/hq720.jpg"
              linkTo="/videos/apresentacao-brasil-home-office"
            />
          );
        })}
      </PageWithSidebar>
    </div>
  )
}
