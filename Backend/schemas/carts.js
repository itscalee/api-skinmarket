import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    skin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'skins',
        required: true
    },
    quantity: {type: Number, required: true}
    },
    {toJSON: { virtuals: true }, toObject: { virtuals: true }, _id: false}
)

itemSchema.virtual('subtotal').get(function() {
    if (this.skin && this.skin.price !== undefined) {
        return this.quantity * this.skin.price;
    }
    return 0; 
})

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
        unique: true
    },
    items: [itemSchema]
    },
    {timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true }}
)

cartSchema.virtual('totalPay').get(function() {
    return this.items.reduce((total, item) => {
        return total + item.subtotal
    }, 0);
})

export default mongoose.model('carts', cartSchema)