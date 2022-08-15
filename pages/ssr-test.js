import * as React from 'react';
import axios from 'axios';
import Seo from '../components/Seo';

class SSRTest extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return {
      users: response.data,
    };
  }

  render() {
    const { users } = this.props;

    const userList = users.map((user) => (
      <li key={user.id}>{user.username}</li>
    ));

    return (
      <>
        <Seo title="SSR" />
        <ul>{userList}</ul>
      </>
    );
  }
}

export default SSRTest;
