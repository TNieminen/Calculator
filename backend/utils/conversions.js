
exports.encodeToBase64 = (data) => {
  const buff = Buffer.from(data)
  return buff.toString('base64')
}

exports.decodeFromBase64 = (data) => {
  const buff = Buffer.from(data, 'base64')  
  return buff.toString('utf-8')
}