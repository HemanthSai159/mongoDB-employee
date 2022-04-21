const mongoose = require('mongoose');
const url='mongodb+srv://klausnik:12345@userlogins.gkbt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology:true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');