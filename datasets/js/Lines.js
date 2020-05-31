let getLines = () => new Promise((resolve, reject) => {
    const Lines = [
        { Id: 1, Content: "Thuật toán là gì ?", cId: 1, isTitle: true, isSubtitle: false, color: '#2196F3', isExample: false, isHighlight: false, isQuestion: false, isPicture: false, urlPicture: null },
        { Id: 2, Content: "", sId: 1, cId: 1, isTitle: true, isSubtitle: false, color: '#2196F3', isExample: false, isHighlight: false, isQuestion: false, isPicture: false, urlPicture: null },
        { Id: 3, Content: "", sId: 1, cId: 1, isTitle: true, isSubtitle: false, color: '#2196F3', isExample: false, isHighlight: false, isQuestion: false, isPicture: false, urlPicture: null },
        { Id: 4, Content: "", sId: 1, cId: 1, isTitle: true, isSubtitle: false, color: '#2196F3', isExample: false, isHighlight: false, isQuestion: false, isPicture: false, urlPicture: null },
        { Id: 5, Content: "", sId: 1, cId: 1, isTitle: true, isSubtitle: false, color: '#2196F3', isExample: false, isHighlight: false, isQuestion: false, isPicture: true, urlPicture: "./datasets/Images/Concepts1_Img1.png" },
    ];
    resolve(Lines);
    reject('Don\'t loaded Lines Data');
});