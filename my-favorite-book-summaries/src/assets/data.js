import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import book3 from "../assets/images/book3.jpg";
import book4 from "../assets/images/book4.jpg";
import book5 from "../assets/images/book5.jpg";

export default [
    {
        id:1,
        title:"Introduction to Machine Learning with Python: A Guide for Data Scientists",
        description:"Machine learning has become an integral part of many commercial applications and research projects, but this field is not exclusive to large companies with extensive research teams. If you use Python, even as a beginner, this book will teach you practical ways to build your own machine learning solutions. With all the data available today, machine learning applications are limited only by your imagination.",
        price:57,
        coverImg:{book1},
        stats:{
            ratings:4,
            reviewCount:16
        }

    },
    {
        id:2,
        title:"Hands-On Machine Learning with Scikit-Learn and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems",
        description:"Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how.",
        price:24,
        coverImg:{book2},
        stats:{
            ratings:4.6,
            reviewCount:1348
        }

    },
    {
        id:3,
        title:"Machine Learning in Action",
        description:"Machine Learning in Action is unique book that blends the foundational theories of machine learning with the practical realities of building tools for everyday data analysis. You'll use the flexible Python programming language to build programs that implement algorithms for data classification, forecasting, recommendations, and higher-level features like summarization and simplification.",
        price:45,
        coverImg:{book3},
        stats:{
            ratings:4.1,
            reviewCount:76
        }

    },
    {
        id:4,
        title:"Real-World Machine Learning",
        description:"Real-World Machine Learning is a practical guide designed to teach working developers the art of ML project execution. Without overdosing you on academic theory and complex mathematics, it introduces the day-to-day practice of machine learning, preparing you to successfully build and deploy powerful ML systems.",
        price:47,
        coverImg:{book4},
        stats:{
            ratings:4.2,
            reviewCount:35
        }

    },
    {
        id:5,
        title:"Deep Learning A Practitioner's Approach",
        description:"Although interest in machine learning has reached a high point, lofty expectations often scuttle projects before they get very far. How can machine learning, especially deep neural networks, make a real difference in your organization? This hands-on guide not only provides the most practical information available on the subject, but also helps you get started building efficient deep learning networks.",
        price:29,
        coverImg:{book5},
        stats:{
            ratings:4.2,
            reviewCount:84
        }

    }
    
]