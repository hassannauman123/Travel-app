// travel-app/app/models/CampModel.ts

import mongoose, { Schema, Document, Model } from 'mongoose';


interface Comment {
    text: string;
    commenterName: string;
}


export interface CampDocument extends Document {
    pic: string;
    title: string;
    description: string;
    rate: number;
    myName: string;
    comments: Comment[];
}


const CommentSchema = new Schema({
    comment: { type: String, required: true },
    commenterName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});


const CampSchema = new Schema({
    pic: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    rate: { type: Number, required: true },
    myName: { type: String, required: true },
    comments: [CommentSchema],
    createdAt: { type: Date, default: Date.now },
});

const CampModel: Model<CampDocument> = mongoose.models.CampModel || mongoose.model<CampDocument>('CampModel', CampSchema);

export default CampModel;
