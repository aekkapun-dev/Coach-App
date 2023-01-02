export default {
  async loadLoggedUserData(context, payload) {
    const userId = payload.userId;

    const response = await fetch(
      `https://coach-vue-app-f9877-default-rtdb.firebaseio.com/coaches/${userId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch data.');

      throw error;
    }

    const fullname = responseData.firstName + ' ' + responseData.lastName;

    context.commit('setFullname', { fullname });
  },
};
