/**
 * @description Response success message wrapper
 */
exports.success = (result) => {
  return { error:false, result}
}

/**
 * @description Response error message wrapper
 */
exports.error = (message = '') => ({ error:true, message})