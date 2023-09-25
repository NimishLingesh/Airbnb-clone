'use client';

interface MenuItemPages {
    onClick: () => void;
    label:string;
}

const MenuItem: React.FC<MenuItemPages> = ({
    onClick,
    label
})=> {
    return (
        <div
            onClick={onClick}
            className="
            px-4
            py-3
            hover:bh-neutral-1oo
            transition
            font-semibold
            "
        >
            {label}
        </div>
    );
}

export default MenuItem;