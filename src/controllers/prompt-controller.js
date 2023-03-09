const openai = require("../config/openai")
const InputPrompt = require("../model/input-model")
module.exports = {
    async sendText(request, response){

        const openaiAI = openai.configuration()
        const inputModel = new inputModel(request.body)
        try {
            const response = await openaiAI.createCompletion(inputModel)
            return response.status(200).json({
                sucess :true,
                data: response.data.choices[0].text
            })
        } catch (error) {
            response.status(400).json({
                sucess:false,
                error: error.response ? error.response.data: 'tem erro no servidor'
            })
        }
        return response.status(200).json({
            message:"caio castro chegou no role"
        })
    }
}