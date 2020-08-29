import apolloClient from './../apollo-client'

class ChannelProvider {


    createChannel(form) {
        return apolloClient.mutate({
            mutation: require('./gql/createChannel.graphql'),
            variables: form
        })
    }

    joinChannel(userName, code) {
        return apolloClient.mutate({
            mutation: require('./gql/joinChannel.graphql'),
            variables: {userName, code}
        })
    }

}


export default new ChannelProvider()