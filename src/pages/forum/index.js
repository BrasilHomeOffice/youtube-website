import PageWithSidebar from '../../components/PageWithSidebar/PageWithSidebar'
import styles from '../../styles/videos/apresentacao-brasil-home-office.module.scss'
import SocialLoginWidget from '../../components/Widgets/SocialLoginWidget/SocialLoginWidget';
import PoolWidget from '../../components/Widgets/PoolWidget/PoolWidget';
import ForumCategory from '../../components/ForumCategory/ForumCategory'

const category = [
  {
    title: "General discution",
    description: "Discussing just Aion things.",
    postNumber: 1,
    finallyPost: {
      title: "Awakened Minion Skill List",
      name: "By Arhangelos-KT",
      datetime: '21/03/1991 12:30:00'
    }
  },
  {
    title: "General discution",
    description: "Discussing just Aion things.",
    postNumber: 8000,
    finallyPost: {
      title: "Awakened Minion Skill List",
      name: "By Arhangelos-KT",
      datetime: '21/03/1991 12:30:00'
    }
  },
  {
    title: "General discution",
    description: "Discussing just Aion things.",
    postNumber: 58000,
    finallyPost: {
      title: "Awakened Minion Skill List",
      name: "By Arhangelos-KT",
      datetime: '21/03/1991 12:30:00'
    }
  },
  {
    title: "General discution",
    description: "Discussing just Aion things.",
    postNumber: 58000,
    finallyPost: {
      title: "Awakened Minion Skill List",
      name: "By Arhangelos-KT",
      datetime: '21/03/1991 12:30:00'
    }
  },
  {
    title: "General discution",
    description: "Discussing just Aion things.",
    postNumber: 58000,
    finallyPost: {
      title: "Awakened Minion Skill List",
      name: "By Arhangelos-KT",
      datetime: '21/03/1991 12:30:00'
    }
  }
].map((value, key) => <ForumCategory key= {key} value={value}

/>)

export default function Forum() {

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
        <div style={
          {
            backgroundColor: "#3f51b5",
            lineHeight:"50px",
            color: "#222",
            paddingLeft: "2%",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"
          }
        }>Forum</div>
        {category}
      </PageWithSidebar>
    </div>
  )
}
