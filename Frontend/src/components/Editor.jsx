import ReactQuill from "react-quill-new"


const  Editor = ({onChange, content}) =>  {

    const modules = {
        toolbar:[
            [{header: [1,2,3, false]}],
            [{color: [ "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
                "#808080", "#800000", "#808000", "#008000", "#800080", "#008080", "#000080",
                "#FF4500", "#FFD700", "#32CD32", "#8A2BE2", "#FF69B4", "#1E90FF", "#B22222",
                "#DC143C", "#FF8C00", "#ADFF2F", "#00FA9A", "#20B2AA", "#9370DB", "#FFB6C1"]}],
            ['bold',
            'italic',
            'underline',
            'strike',
            'blockquote'],
            [{list:'bullet' },
            {list:'ordered' },
            {indent:'-1' },
            {indent:'+1' }
            ],
            [ 'link',
            'image'],
            ['clean'],
           
        ]
    }

    return(
        <ReactQuill
            theme="snow" 
            value={content}
            onChange={onChange}
            modules={modules} 
        />
    )
}
export default Editor