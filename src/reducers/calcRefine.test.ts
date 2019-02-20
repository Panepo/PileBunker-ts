import * as calcRefine from './calcRefine';
import { dbWeapon } from '../raw/database';
import { WeaponInfo } from '../model/modelCalc';

describe('Single update test', () => {
  it('should get the correct data', () => {
    calcRefine.updateRefineMarco('all-ref-0');
    let input: WeaponInfo[] = dbWeapon.chain().find({ name: '手裏剣' }).data();
    let inputAtk: number = input[0].atk;
    let inputRef: number = input[0].ref;

    calcRefine.updateRefine('手裏剣');
    let output1: WeaponInfo[] = dbWeapon.chain().find({ name: '手裏剣' }).data();
    let outputAtk1: number = output1[0].atk;
    let outputRef1: number = output1[0].ref;

    expect(outputAtk1).toEqual(inputAtk + 1);
    expect(outputRef1).toEqual(inputRef + 1);

    calcRefine.updateRefineMarco('1-ref-10');
    calcRefine.updateRefine('手裏剣');
    let output2: WeaponInfo[] = dbWeapon.chain().find({ name: '手裏剣' }).data();
    let output2Atk: number = output2[0].atk;
    let output2Ref: number = output2[0].ref;
    expect(output2Atk).toEqual(inputAtk);
    expect(output2Ref).toEqual(0);
  });
});

describe('Single update test', () => {
  it('should get the correct data', () => {
    calcRefine.updateRefineMarco('all-ref-0');
    let input1: WeaponInfo[] = dbWeapon.chain().find({ name: '手裏剣' }).data();
    let input1Atk: number = input1[0].atk;
    let input1Ref: number = input1[0].ref;
    let input2: WeaponInfo[] = dbWeapon.chain().find({ name: '四方手裏剣' }).data();
    let input2Atk: number = input2[0].atk;
    let input2Ref: number = input2[0].ref;
    let input3: WeaponInfo[] = dbWeapon.chain().find({ name: '八方手裏剣' }).data();
    let input3Atk: number = input3[0].atk;
    let input3Ref: number = input3[0].ref;

    calcRefine.updateRefineMarco('1-ref-10');
    let output1: WeaponInfo[] = dbWeapon.chain().find({ name: '手裏剣' }).data();
    let output1Atk: number = output1[0].atk;
    let output1Ref: number = output1[0].ref;
    let output2: WeaponInfo[] = dbWeapon.chain().find({ name: '四方手裏剣' }).data();
    let output2Atk: number = output2[0].atk;
    let output2Ref: number = output2[0].ref;
    let output3: WeaponInfo[] = dbWeapon.chain().find({ name: '八方手裏剣' }).data();
    let output3Atk: number = output3[0].atk;
    let output3Ref: number = output3[0].ref;

    expect(output1Atk).toEqual(input1Atk - input1Ref + 10);
    expect(output1Ref).toEqual(10);
    expect(output2Atk).toEqual(input2Atk);
    expect(output2Ref).toEqual(input2Ref);
    expect(output3Atk).toEqual(input3Atk);
    expect(output3Ref).toEqual(input3Ref);

    calcRefine.updateRefineMarco('2-ref-10');
    output1 = dbWeapon.chain().find({ name: '手裏剣' }).data();
    output1Atk = output1[0].atk;
    output1Ref = output1[0].ref;
    output2 = dbWeapon.chain().find({ name: '四方手裏剣' }).data();
    output2Atk = output2[0].atk;
    output2Ref = output2[0].ref;
    output3 = dbWeapon.chain().find({ name: '八方手裏剣' }).data();
    output3Atk = output3[0].atk;
    output3Ref = output3[0].ref;
    expect(output1Atk).toEqual(input1Atk - input1Ref + 10);
    expect(output1Ref).toEqual(10);
    expect(output2Atk).toEqual(input2Atk - input2Ref + 10);
    expect(output2Ref).toEqual(10);
    expect(output3Atk).toEqual(input3Atk);
    expect(output3Ref).toEqual(input3Ref);

    calcRefine.updateRefineMarco('3-ref-10');
    output1 = dbWeapon.chain().find({ name: '手裏剣' }).data();
    output1Atk = output1[0].atk;
    output1Ref = output1[0].ref;
    output2 = dbWeapon.chain().find({ name: '四方手裏剣' }).data();
    output2Atk = output2[0].atk;
    output2Ref = output2[0].ref;
    output3 = dbWeapon.chain().find({ name: '八方手裏剣' }).data();
    output3Atk = output3[0].atk;
    output3Ref = output3[0].ref;
    expect(output1Atk).toEqual(input1Atk - input1Ref + 10);
    expect(output1Ref).toEqual(10);
    expect(output2Atk).toEqual(input2Atk - input2Ref + 10);
    expect(output2Ref).toEqual(10);
    expect(output3Atk).toEqual(input3Atk - input3Ref + 10);
    expect(output3Ref).toEqual(10);

    calcRefine.updateRefineMarco('4-ref-10');
    output1 = dbWeapon.chain().find({ name: '手裏剣' }).data();
    output1Atk = output1[0].atk;
    output1Ref = output1[0].ref;
    output2 = dbWeapon.chain().find({ name: '四方手裏剣' }).data();
    output2Atk = output2[0].atk;
    output2Ref = output2[0].ref;
    output3 = dbWeapon.chain().find({ name: '八方手裏剣' }).data();
    output3Atk = output3[0].atk;
    output3Ref = output3[0].ref;
    expect(output1Atk).toEqual(input1Atk - input1Ref + 10);
    expect(output1Ref).toEqual(10);
    expect(output2Atk).toEqual(input2Atk - input2Ref + 10);
    expect(output2Ref).toEqual(10);
    expect(output3Atk).toEqual(input3Atk - input3Ref + 10);
    expect(output3Ref).toEqual(10);

    calcRefine.updateRefineMarco('all-ref-10');
    output1 = dbWeapon.chain().find({ name: '手裏剣' }).data();
    output1Atk = output1[0].atk;
    output1Ref = output1[0].ref;
    output2 = dbWeapon.chain().find({ name: '四方手裏剣' }).data();
    output2Atk = output2[0].atk;
    output2Ref = output2[0].ref;
    output3 = dbWeapon.chain().find({ name: '八方手裏剣' }).data();
    output3Atk = output3[0].atk;
    output3Ref = output3[0].ref;
    expect(output1Atk).toEqual(input1Atk - input1Ref + 10);
    expect(output1Ref).toEqual(10);
    expect(output2Atk).toEqual(input2Atk - input2Ref + 10);
    expect(output2Ref).toEqual(10);
    expect(output3Atk).toEqual(input3Atk - input3Ref + 10);
    expect(output3Ref).toEqual(10);
  });
});
