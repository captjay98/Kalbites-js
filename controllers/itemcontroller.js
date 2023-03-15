



const home_index = (req, res) => {
  res.render("index");
}


const cake_index = (req, res) => {
  res.render("cake");
}


const parfait_index = (req, res) => {
  res.render("parfait");
}


const brownie_index = (req, res) => {
  res.render("brownie");
}


module.exports = {
  home_index,
  cake_index,
  cake_index,
  parfait_index,
  brownie_index,
}
