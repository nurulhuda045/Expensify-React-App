import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

const app = firebase.initializeApp(firebaseConfig);

const database = app.database();

export { app, database as default};


// database.ref('expenses').once('value', (snapshot) => {
// 	const expenses = []
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses)
// }, (e) => console.log('failed to fetch', e))

// database.ref().once('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref().once('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref().once('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').push({
// 	description: 'Gym',
// 	note: 'Next three months gym charges was paid.',
// 	amount: 600,
// 	createdAt: 383849390322
// })


//   const onValueChange = database.ref().on('value', (snapshot) => {
// 	  console.log(snapshot.val())
//   }, (e) => {
// 	  console.log('failed to fetch data', e)
//   })
	
//   database.ref().once('value').then((data) => {
// 	  const val = data.val()
// 	  console.log(val)
//   }).catch((e) => {
// 	  console.log('failed to fetch data', e)
//   })

//   database.ref().set({
// 	  name: 'Noorul Huda',
// 	  age: 23,
// 	  isSingle: true,
// 	  location: {
// 		  city: 'Greater Noida',
// 		  state: 'UP',
// 		  pincode: 201306
// 	  }
//   }).then(() => console.log('data is saved')
//   ).catch((error) => console.log('this is failed!',error))

// //   database.ref('age').set(24)
// //   database.ref('location/city').set('Noida')
// //   database.ref('attributes').set({
// // 	  height: 5.10,
// // 	  weight: 50
// //   })

// database.ref('isSingle').remove().then(() => {
// 	console.log('data is removed!')
// }).catch((e) => console.log('failed to remove!', e))

// database.ref().update({
// 	job: 'Software Developer',
// 	'location/pincode': 201310
// }).then(() => {
// 	console.log('data is updated!')
// }).catch((e) => console.log('failed to update!', e))



