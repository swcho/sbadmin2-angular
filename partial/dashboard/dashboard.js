angular.module('almReportWeb').controller('DashboardCtrl',function($scope){

    $scope.header = "Dashboard";

    $scope.timelineList = [{
        badge: {
            ico: 'fa-check'
        },
        title: 'Lorem ipsum dolor',
        dateAnnotation: {
            date: new Date(),
            description: 'via Twitter'
        },
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.'
    }, {
        inverted: true,
        badge: {
            clas: 'warning',
            ico: 'fa-credit-card'
        },
        title: 'Lorem ipsum dolor',
        dateAnnotation: {
            date: new Date(),
            description: ''
        },
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>'
    }, {
        badge: {
            clas: 'danger',
            ico: 'fa-bomb'
        },
        title: 'Lorem ipsum dolor',
        dateAnnotation: {
            date: new Date(),
            description: ''
        },
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>'
    }, {
        inverted: true,
        title: 'Lorem ipsum dolor',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>'
    }, {
        badge: {
            clas: 'info',
            ico: 'fa-save'
        },
        title: 'Lorem ipsum dolor',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>',
        menuItems: [{
            sref: '',
            title: 'Action'
        }, {
            sref: '',
            title: 'Another action'
        }, {
            sref: '',
            title: 'Something else here'
        }, {
            divider: true
        }, {
            sref: '',
            title: 'Separated link'
        }]
    }, {
        title: 'Lorem ipsum dolor',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>'
    }, {
        inverted: true,
        badge: {
            clas: 'success',
            ico: 'fa-graduation-cap'
        },
        title: 'Lorem ipsum dolor',
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>'
    }];


    $scope.notificationList = [{
        ico: 'fa-comment',
        title: 'New Comment',
        date: new Date()
    }, {
        ico: 'fa-twitter',
        title: '3 New Followers',
        date: new Date()
    }, {
        ico: 'fa-envelope',
        title: 'Message Sent',
        date: new Date()
    }, {
        ico: 'fa-tasks',
        title: 'New Task',
        date: new Date()
    }, {
        ico: 'fa-upload',
        title: 'Server Rebooted',
        date: new Date()
    }, {
        ico: 'fa-bolt',
        title: 'Server Crashed!',
        date: new Date()
    }, {
        ico: 'fa-warning',
        title: 'Server Not Responding',
        date: new Date()
    }, {
        ico: 'fa-shopping-cart',
        title: 'New Order Placed',
        date: new Date()
    }, {
        ico: 'fa-money',
        title: 'Payment Received',
        date: new Date()
    }];

});